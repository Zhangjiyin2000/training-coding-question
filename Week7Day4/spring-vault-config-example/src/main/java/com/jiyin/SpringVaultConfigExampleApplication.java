package com.jiyin;

import com.jiyin.config.Credentials;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(Credentials.class)
public class SpringVaultConfigExampleApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(SpringVaultConfigExampleApplication.class, args);
    }

    private Logger logger = LoggerFactory.getLogger(SpringVaultConfigExampleApplication.class);

    private Credentials credentials;

    public SpringVaultConfigExampleApplication(Credentials credentials) {
        this.credentials = credentials;
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Retrieving username and password from Spring Cloud Vault Config");
        logger.info("Username is: " + credentials.getUsername());
        logger.info("Password is: " + credentials.getPassword());
    }
}
