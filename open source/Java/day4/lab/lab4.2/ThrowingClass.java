/* 
 • Create your own exception class.
 • Write down two other classes:
 • the first will contain three methods throwing your newly
 created exception class
 • the second class will be calling the methods that throws
 exception using the try-catch-finally block
*/




public class ThrowingClass {
	//num negative
	public int fact(int num) throws MyOwnException{
		if(num < 0) throw new MyOwnException("we can't Cal factorial of Negative number:(");
		if(num == 0 || num == 1 ) return 1;
		return num*fact(num-1);
	}
	//string empty
	public void checkString(String str) throws MyOwnException{
		if(str.isEmpty()) throw new MyOwnException("we shouldn't have empty string");
		System.out.println("Our String is : " + str);
	}
	//num = 0
	public void checkNonZero(int num) throws MyOwnException{
		if(num == 0) throw new MyOwnException("we shouldn't have zero number");
		System.out.println("Our number is : " + num);
	}

	
}