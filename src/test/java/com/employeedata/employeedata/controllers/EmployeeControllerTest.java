package com.employeedata.employeedata.controllers;

import com.employeedata.employeedata.model.Employee;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class EmployeeControllerTest {

    @Test
    public void getAllEmployees() {
        EmployeeController tester = new EmployeeController();
        List<Employee> expectedOut = tester.getAllEmployees();
//        assertEquals(expectedOut.size(), getAllEmployees());
    }

    @Test
    public void getEmployeeById() {
    }

    @Test
    public void createEmployee() {
    }

    @Test
    public void updateEmployee() {
    }

    @Test
    public void deleteEmployee() {
    }
}