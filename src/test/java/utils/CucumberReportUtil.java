package utils;

import java.io.File;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.commons.io.FileUtils;

public class CucumberReportUtil {

    public static void generateReport(String karateOutputPath, String projectName) {
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] { "json" }, true);
        List<String> jsonPaths = new ArrayList<String>(jsonFiles.size());
        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, new Configuration(new File("target"), projectName));
        reportBuilder.generateReports();
    }
}
