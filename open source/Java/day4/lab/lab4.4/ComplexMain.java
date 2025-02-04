/*
 • Create a generic interface that could be used to represent
 complex numbers
 • Create some generic methods that represent basic arithmetic
 operation on complex
*/

public class ComplexMain{
	public static void main(String[] args) {
		DoubleComplex c1 = new DoubleComplex(3.04, 4.06);
        	DoubleComplex c2 = new DoubleComplex(1.88, 2.088);

        	System.out.println("c1: " + c1);
        	System.out.println("c2: " + c2);

        	System.out.println("Addition: " + c1.add(c2));
        	System.out.println("Subtraction: " + c1.subtract(c2));
        	System.out.println("Multiplication: " + c1.product(c2));
        	System.out.println("Division: " + c1.div(c2));
    }
}