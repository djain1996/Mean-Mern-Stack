class Point
{
	constructor (x,y)
	{
		this.x = x;
		this.y = y;
	}

	findDistance(c)
	{ 
		var result = new Point(0,0);

		result.x = this.x - c.x;
		result.y= this.y - c.y;

		var distance = Math.sqrt(Math.pow(result.x,2) + Math.pow(result.y,2));
		return distance;
       // return result;
	}
}