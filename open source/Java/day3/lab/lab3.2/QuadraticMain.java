/*
 Use the interfaces in java.util.function to build an application that defines the roots of the quadratic
 equation (𝑎𝑥2+𝑏𝑥 +𝑐 = 0) and the roots could be computed by the  formula of x 
*/

package quadratic;


import java.util.function.Function;

public class QuadraticMain  {
	public static void main(String[] args){
		float a=1;
		float b=5;
		float c=6;

		System.out.println("the the roots of the quadratic equation are :-\n "+ new QuadraticEquation().apply(new Float[]{a, b, c}));
		
    	}
}

