class Complex
{
	constructor (real,imag)
	{
		this.real = real;
		this.imag = imag;
	}

	add(Complex c)
	{ 

		var result = new Complex(0,0);
		result.real = this.real + c.real;
		result.imag = this.imag + c.imag;
        return result;
	}
}