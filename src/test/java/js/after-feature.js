function fn() {
    karate.log("after feature:", karate.scenario.name);
    karate.call("after-feature.feature", { caller: karate.feature.fileName });
}