#include <iostream>
#include <stdlib.h>
#include <time.h>
int rundom(){
	int x=1;
	time_t seconds;
	seconds = time(NULL);
	srand((unsigned) seconds);
	x =rand ()%41-1;
	printf(" %d",x);
}
int main( ) {
	rundom();
	
	return 0;
}
