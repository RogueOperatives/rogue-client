import { Injectable } from '@angular/core';

import {Agent, Gender} from '../models/agent'

@Injectable()
export class AgentService {
    constructor() { }

    public getAll(): Agent[] {
        return [
            {
                FirstName: 'John',
                LastName: 'Doe',
                CodeName: 'Skippy',
                Sex: Gender.Male
            },
            {
                FirstName: 'Jane',
                LastName: 'Doe',
                CodeName: 'Xena',
                Sex: Gender.Female
            }
        ];
    }
}
