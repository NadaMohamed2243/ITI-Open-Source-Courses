/*
➢ Develop an application to convert temperature from Celsius to Fahrenheit using Function<T,R>
*/

package temp;
import java.util.function.Function;

public class TempMain {
	public static void main(String[] args){
		float x = 98.6f;
		float result = new Function<Float,Float>(){
			@Override
			public Float apply (Float t){
				return ((t - 32) * (5.0f/9));
			}
		}.apply(x);
		System.out.println("Temp is "+x+" F or "+ result +" F"); 
	}
}