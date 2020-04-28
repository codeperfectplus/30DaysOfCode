class Student extends Person {

	constructor(firstName, lastName, identification, scores) {
		super(firstName, lastName, identification);
		this.testScores = scores;
	}
	calculate() {
		let average = this.testScores.reduce(
			function (a, b) {
				return a + b
			},
			0
		) / this.testScores.length

		if (average >= 90) {
			return 'O'
		}else if (average >= 80) {
			return 'E'
		}else if (average >= 70) {
			return 'A'
		}else if (average >= 55) {
			return 'P'
		}else if (average >= 40) {
			return 'D'
		}else {
			return 'T'
		}
	}
}