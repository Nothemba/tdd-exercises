describe("Password Validity", function(){
 it("should be greater than 8 characters", function(){
     expect(characters("rtyhna979")).toBe(true);
 })
 it("should have at least one uppercase", function(){
     expect(uppercase("LguiopL8o")).toBe(true);
 })
 it("password should have at least one lowercase letter", function(){
     expect(lowercase("HuioHk")).toBe(true)
 })
 it("password should have at least one number", function(){
     expect(number("1dffjui")).toBe(true);
 })
 it ("password should not be null", function(){
     expect(notNull("")).toBe(false);
 })
})
describe('passwordIsOkay', function(){
    it('should check if password is greater than 8 characters and have least one lowercase ', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
    it('should check if password is greater than 8 characters and have at least one uppercase', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
    it('should check if password is greater than 8 characters and have atleast one number', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
    
    it('should check if password is greater than 8 characters and contains at least one number, upper and lower case ', function(){
        expect(passwordIsOkay('Nothey810')).toBe(true);
    })
 })

 