/*
➢ Develop an application to convert temperature from Celsius to Fahrenheit using Function<T,R>
*/

package temp;
import java.util.function.Function;

public class TemperatureConvert implements Function<Float,Float>{
	@Override
	public Float apply (Float t){
		return ((t - 32) * (5.0f/9));
	}
}



