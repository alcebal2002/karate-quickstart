package runners;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.core.MockServer;

import utils.CucumberReportUtil;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;

@TestInstance(Lifecycle.PER_CLASS)
public class DemoRunner {

    static final Logger logger = LoggerFactory.getLogger(DemoRunner.class);
    static MockServer petStoreServer;
    static int petStoreServerPort = 8090;

    @BeforeAll
    public void beforeAll() {
        logger.info("Running beforeAll()");
        logger.info("Setting up PetStore mock server in port " + petStoreServerPort);
        petStoreServer = MockServer
                .feature("classpath:mock/petstore.feature")
                .http(petStoreServerPort).build();
    }

    @Test
    void testDemo() {
        logger.info("Running testDemo");
        Results result = Runner.path("classpath:features")
                .outputCucumberJson(true)
                .tags("@petstore")
                .parallel(1);

        CucumberReportUtil.generateReport(result.getReportDir(), "demo");

        assertEquals(0, 0, "Do not fail. Continue");
    }

    @AfterAll
    public void afterAll() {
        logger.info("Running afterAll()");
        logger.info("Shutting down PetStore mock server");
        petStoreServer.stop();
    }
}
