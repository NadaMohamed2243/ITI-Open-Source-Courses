/*  Create simple application that performs the following actions:
  Receives an input (as main arguments) and checks for its value and prints it back.*/

public class Example2{
	public static void main(String args[]){
		// String literal
		//String targetValue = "CoreJava";

		// Using new Keyword 
                String targetValue = new String("CoreJava");

		if( args.length != 0 && targetValue.equals(args[0]))
		{
			System.out.println("true value "+args[0]);
		}
		else{
			System.out.println("false value");

		}
	}
}