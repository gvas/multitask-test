test("module without setup/teardown (default)", function () {
  expect(1);
  ok(true);
});

test("expect in test", 2, function () {
  ok(true);
  ok(true);
});
