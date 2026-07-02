# [MANDATORY]
# Hands on 4: Difference between JPA, Hibernate and Spring Data JPA

## 1. Java Persistence API (JPA)
- **What it is:** JSR 338 Specification for persisting, reading, and managing data from Java objects.
- **Key Detail:** It *does not* contain a concrete implementation of the specification. It is just an interface/standard.
- **Implementations:** Hibernate is one of the most popular implementations of JPA.

## 2. Hibernate
- **What it is:** An Object-Relational Mapping (ORM) Tool that concretely implements the JPA specification.

## 3. Spring Data JPA
- **What it is:** Spring Data JPA does not have a JPA implementation itself, but rather reduces boilerplate code significantly.
- **Key Detail:** This is another level of abstraction *over* a JPA implementation provider (like Hibernate).
- **Benefits:** Automatically manages transactions and generates queries without requiring explicit session management.

---

## Code Comparison: Adding an Employee

### The Raw Hibernate Approach
Notice the heavy boilerplate required to open sessions, manage transactions, and handle try-catch-finally blocks just to save a single record.

```java
/* Method to CREATE an employee in the database */
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;
    
    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee); 
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace(); 
    } finally {
        session.close(); 
    }
    return employeeID;
}
```

### The Spring Data JPA Approach
Notice how Spring Data JPA abstracts away all session and transaction management, leaving only clean, readable business logic.

**EmployeeRepository.java**
```java
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // Basic CRUD operations are automatically provided
}
```

**EmployeeService.java**
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
```

---

## Reference Links
- [Difference between Spring Data JPA and Hibernate](https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1)
- [Intro to JPA](https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html)
