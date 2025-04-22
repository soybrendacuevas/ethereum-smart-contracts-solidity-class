const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("should store and retrieve a value correctly", async () => {
    const instance = await SimpleStorage.deployed();
    
    // Establece un valor
    await instance.set(42);
    
    // Recupera el valor y verifica que sea el esperado
    const value = await instance.get();
    assert.equal(value.toString(), "42", "El valor almacenado no es 42");
  });
});
