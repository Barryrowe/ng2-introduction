import 'reflect-metadata';
import { App } from './app';

describe('The Application', function(){
	
	it('should always allow 1+1 to equal 2', function(){
		expect(1+1).toBe(2);
	});
	
	it('should exist', function(){
		expect(App).toBeDefined();
	});
});