describe("Calculator", function() {
   
   
   beforeEach(function() {
 
    calc = new Calculator();
   });
    
    
    describe("Addition function", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        
        
        it("should return 100", function() {
            calc.add(30);
            calc.add(70);
            expect(calc.value).toBe(100);
        });
        
        
        
        it("should return error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Apple");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

