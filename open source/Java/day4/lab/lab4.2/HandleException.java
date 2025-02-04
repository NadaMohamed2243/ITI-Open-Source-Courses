/* 
 • Create your own exception class.
 • Write down two other classes:
 • the first will contain three methods throwing your newly
 created exception class
 • the second class will be calling the methods that throws
 exception using the try-catch-finally block
*/



public class HandleException {
	
	public static void main(String[] args){
		
		ThrowingClass ex = new ThrowingClass();

		//fact
		try {
           		ex.fact(-5);
        	} catch (MyOwnException e) {
            		System.out.println("Caught exception: " + e.getMessage());
        	} finally {
            		System.out.println("Finally executed for fact");
        	}
		
		//checkString
		try {
           		ex.checkString("Hi");
        	} catch (MyOwnException e) {
            		System.out.println("Caught exception: " + e.getMessage());
        	} finally {
            		System.out.println("Finally executed for checkString");
        	}

		//checkNonZero
		try {
           		ex.checkNonZero(0);
        	} catch (MyOwnException e) {
            		System.out.println("Caught exception: " + e.getMessage());
        	} finally {
            		System.out.println("Finally executed for checkNonZero");
        	}


	}
	
}