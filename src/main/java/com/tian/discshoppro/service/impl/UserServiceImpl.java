package com.tian.discshoppro.service.impl;

import com.tian.discshoppro.model.User;
import com.tian.discshoppro.model.dto.UserDTO;
import com.tian.discshoppro.repository.UserRepository;
import com.tian.discshoppro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    private UserDTO convertToDTO(User user) {
        return new UserDTO(user.getId(), user.getUsername(), user.getEmail(), user.getRoles());
        //Note: We usually do not include passwords in the DTO
    }

    private User convertToEntity(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setRoles(userDTO.getRoles());
        //Set the password only when creating a new user,
        //do not set the password directly from the DTO when updating;
        if (userDTO.getPassword() != null && !userDTO.getPassword().isEmpty()) {
            user.setPassword(userDTO.getPassword());
        }
        return user;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<UserDTO> getUserById(Long id) {
        return userRepository.findById(id).map(this::convertToDTO);
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = convertToEntity(userDTO);
        User savedUser = userRepository.save(user);
        return convertToDTO(savedUser);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDTO) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setUsername(userDTO.getUsername());
                    existingUser.setEmail(userDTO.getEmail());
                    existingUser.setRoles(userDTO.getRoles());
                    //Only update the password if a new one is provided;
                    if (userDTO.getPassword() != null && !userDTO.getPassword().isEmpty()) {
                        existingUser.setPassword(userDTO.getPassword());
                    }
                    User updatedUser = userRepository.save(existingUser);
                    return convertToDTO(updatedUser);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}