/*
 • Create a generic interface that could be used to represent
 complex numbers
 • Create some generic methods that represent basic arithmetic
 operation on complex
*/

public interface Complex<T> {

	T getReal();
	T getImaginary();

	Complex<T> add(Complex<T> z);
	Complex<T> subtract(Complex<T> z);
	Complex<T> product(Complex<T> z);
	Complex<T> div(Complex<T> z);
}