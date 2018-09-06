package com.employeedata.employeedata.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.mongodb.core.index.Indexed;

@Document(collection = "employee")
public class Employee {
    @Id
    String id;
    String firstName;
    String lastName;
    String middleInitial;
    String email;
    Integer phone;
    String positionCategory;
    Date dateHired;
    String addressOne;
    String addressTwo;
    String city;
    String state;
    Integer zipCode;
    Boolean isActive;

    public Employee() {
    }

    /* Overload constructor */
    public Employee(
            String firstName, String lastName, String middleInitial,
            String email, Integer phone, String positionCategory,
            Date dateHired, String addressOne, String addressTwo,
            String city, String state, Integer zipCode,
            Boolean isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.email = email;
        this.phone = phone;
        this.positionCategory = positionCategory;
        this.dateHired = dateHired;
        this.addressOne = addressOne;
        this.addressTwo = addressTwo;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.isActive = isActive;
    }

    /*****************
     * Getters
     ********************/
    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public String getEmail() {
        return email;
    }

    public Integer getPhone() {
        return phone;
    }

    public String getPositionCategory() {
        return positionCategory;
    }

    public Date getDateHired() {
        return dateHired;
    }

    public String getAddressOne() {
        return addressOne;
    }

    public String getAddressTwo() {
        return addressTwo;
    }

    public String getCity() {
        return city;
    }

    public String getState() { return state; }

    public Integer getZipCode() { return zipCode; }

    public Boolean getActive() {
        return isActive;
    }

    /*****************
     * Setters
     ********************/


    public void setId(String id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public void setPositionCategory(String positionCategory) {
        this.positionCategory = positionCategory;
    }

    public void setDateHired(Date dateHired) {
        this.dateHired = dateHired;
    }

    public void setAddressOne(String addressOne) {
        this.addressOne = addressOne;
    }

    public void setAddressTwo(String addressTwo) {
        this.addressTwo = addressTwo;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setZipCode(Integer zipCode) {
        this.zipCode = zipCode;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    /**
     * To String OvR
     * @return
     */
    @Override
    public String toString() {
        return String.format(
                "Employee[id=%s, name='%s', address='%s']",
                id, firstName, addressOne);
    }
}
