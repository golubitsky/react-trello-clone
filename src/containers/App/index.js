import React from 'react';
import { getCurrentEnvironment } from '../../utils/env';

export default () => <div>Hello world in {getCurrentEnvironment()}!</div>;
