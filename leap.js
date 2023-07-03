/** @format */

export function isLeap(year) {
	if (!(year % 400)) return true;
	if (!(year % 4)) {
		if (!(year % 100)) return false;
		return true;
	}
	return false;
}
