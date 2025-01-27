/*   Create simple application that performs the following actions:
  Receives two inputs (as main arguments) a number and a string and prints the string on
 different lines according to the given number. */

public class Example3{
	public static void main(String args[]){
		try{
			if(args.length != 0){
				for(int i = 0 ; i < Integer.parseInt(args[0]) ; i++)
				{
					System.out.println(args[1]);
				}
			}
		}
		catch(Exception e)
		{
			System.out.println("can't convert string "+ args[0] +" to int");
		}
	}
}