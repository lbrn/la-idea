export default function unique(arr: any): any[] {
	return arr.filter((item: any, i: number, self: any) => {
		return self.indexOf(item) === i;
	});
}
