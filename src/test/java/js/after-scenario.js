function fn() {
    karate.log("after scenario set in karate-base or karate-config:", karate.scenario.name);
    karate.call("after-scenario.feature", { caller: karate.feature.fileName });
}