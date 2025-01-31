/*
 Use the interfaces in java.util.function to build an application that defines the roots of the quadratic
 equation (𝑎𝑥2+𝑏𝑥 +𝑐 = 0) and the roots could be computed by the  formula of x 
*/

package quadratic;


import java.util.function.Function;

public class QuadraticEquation implements Function<Float[], String> {
	@Override
    	public String apply(Float[] coe) {
        	float a = coe[0];
        	float b = coe[1];
        	float c = coe[2];

   
        	if (a == 0) {
            		return "This is a linear equation, not quadratic.";
        	}

     
        	float d = b * b - 4 * a * c;

        	if (d > 0) {
            		float r1 = (-b + (float) Math.sqrt(d)) / (2 * a);
            		float r2 = (-b - (float) Math.sqrt(d)) / (2 * a);
            		return "The roots are real : Root 1 = " + r1 + ", Root 2 = " + r2;
        	} else if (d == 0) {
            		float r = -b / (2 * a);
            		return "The roots are real and equal: Root = " + r;
        	} else {
            		float realPart = -b / (2 * a);
            		float imaginaryPart = (float) Math.sqrt(-d) / (2 * a);
            		return "The roots are complex: Root 1 = " + realPart + " + " + imaginaryPart + "i, Root 2 = " + realPart + " - " + imaginaryPart + "i";
        	}
    }
}

