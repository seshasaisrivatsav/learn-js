## Spring boot

### Intro

`static` folder -> all the web resources live for webapps
`templates` folder -> tempaltes for webapps
`application.properties` file -> Define values for different environments

### Bean
- In Spring, the objects that form the backbone of your application and that are managed by the Spring IoC container are called beans. 
- A bean is an object that is instantiated, assembled, and otherwise managed by a "Spring IoC container

### Inversion of Control
Simply put, Inversion of Control, or IoC for short, is a process in which an object defines its dependencies without creating them. This object delegates the job of constructing such dependencies to an IoC container.

Let's start with the declaration of a couple of domain classes before diving into IoC.

### Configuring bean
Rather than we creating instances of the classes, we let sprint do it

#### Traditional way
```
Address address = new Address("High Street", 1000);
Company company = new Company(address);
```

#### Sprint's way
- First off, let's decorate the Company class with the @Component annotation:
- Here's a configuration class supplying bean metadata to an IoC container:
- The `configuration` class produces a `bean` of type Address. It also carries the @ComponentScan annotation, which instructs the container to looks for beans in the package containing the Company class.
```
@Configuration
@ComponentScan(basePackageClasses = Company.class)
public class Config {
    @Bean
    public Address getAddress() {
        return new Address("High Street", 1000);
    }
}
```

#### Checking existence of properties
- We will use instance of AnnotationCOnfigAPplicationContext class to build up a container
```
ApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
Company company = context.getBean("company", Company.class);
assertEquals("High Street", company.getAddress().getStreet());
assertEquals(1000, company.getAddress().getNumber());
```

## Exceptions
### UnsatisfiedDependencyException
UnsatisfiedDependencyException gets thrown when, as the name suggests, some bean or property dependency isn't satisfied.

This may happen when Spring application tries to wire a bean and cannot resolve one of the mandatory dependencies.
