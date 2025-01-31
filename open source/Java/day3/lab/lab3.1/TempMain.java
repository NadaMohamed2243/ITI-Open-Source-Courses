/*
➢ Develop an application to convert temperature from Celsius to Fahrenheit using Function<T,R>
*/

package temp;
import java.util.function.Function;

public class TempMain {
	public static void main(String[] args){
		float x = 98.6f;
		System.out.println("Temp is "+x+" F or "+ new TemperatureConvert().apply(x)+" F"); 
	}
}