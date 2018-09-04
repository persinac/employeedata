package com.employeedata.employeedata.controllers;

import javax.validation.Valid;
import com.employeedata.employeedata.model.Employee;
import com.employeedata.employeedata.repos.EmployeeRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Employee Controller:
 * Use postman to test
 *
 * When we update code here - in production, is it just expected that the server will go down and
 * the code will need to rebuilt?
 */
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    EmployeeRepos emplRepository;

    /**
     * Why not iterable?
     * @return
     */
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
        return emplRepository.findAll(sortByCreatedAtDesc);
    }

    /**
     *
     * @param id
     * @return
     */
    @GetMapping(value="/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") String id) {
        return emplRepository.findById(id)
                .map(emp -> ResponseEntity.ok().body(emp))
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Create a new employee
     * @param emp
     * @return
     */
    @PostMapping("/employees")
    public Employee createEmployee(@Valid @RequestBody Employee emp) {
        return emplRepository.save(emp);
    }

    /**
     * Start by updating name, address, and city of empl
     * When add more - remember to restart and test with postman
     * @param id
     * @param emp
     * @return
     */
    @PutMapping(value="/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") String id,
                                           @Valid @RequestBody Employee emp) {

        return emplRepository.findById(id)
                .map(empData -> {
                    if(emp.getName() != null) empData.setName(emp.getName());
                    if(emp.getAddress() != null) empData.setAddress(emp.getAddress());
                    if(emp.getCity() != null) empData.setCity(emp.getCity());
                    Employee updatedEmpl = emplRepository.save(empData);
                    return ResponseEntity.ok().body(updatedEmpl);
                }).orElse(ResponseEntity.notFound().build());
    }

    /**
     * Remember to have a "delete me" employee so that other tests (ie: update) do not get invalidated
     * @param id
     * @return
     */
    @DeleteMapping(value="/employees/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable("id") String id) {
        return emplRepository.findById(id)
                .map(emp -> {
                    emplRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
