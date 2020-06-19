module.exports = {
	roots: ['<rootDir/src>'],
	collectCoverageFrom: [
	'<rootDir>/src/**/*.{ts, txs}'
	],
	coverageDirectory: 'coverage',
	testEviroment: 'node',
	transform: {
		'.+\\.ts$': 'ts-jest'
	}
}