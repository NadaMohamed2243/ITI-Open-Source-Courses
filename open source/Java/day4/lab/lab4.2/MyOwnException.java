/* 
 • Create your own exception class.
 • Write down two other classes:
 • the first will contain three methods throwing your newly
 created exception class
 • the second class will be calling the methods that throws
 exception using the try-catch-finally block
*/


public class MyOwnException extends Exception {
	public MyOwnException(String ex)
	{
		super(ex);
	}
}