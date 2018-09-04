package com.employeedata.employeedata.repos;

import com.employeedata.employeedata.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepos extends MongoRepository<Employee, String> {
    //MongoRepository takes care of the basic functions we need for this
}