'use strict';

import { AsyncStorage } from 'react-native';

const KEY_INTRO_READ = 'isIntroRead'; // boolean

class AppService {

    getIntroInfo(cb) {
        AsyncStorage.multiGet([KEY_INTRO_READ], (err, val) => {

            if (err) {
                return cb(err); // if error return error on callback function
            }

            if (!val) {
                return cb({errorMessage: "No data found."}); // if empty result return empty on callback function
            }

            var arr = new Array();
            val.map((result, i, valu) => {
                let key = valu[i][0];
                let val2 = valu[i][1];
                arr[key] = val2;
            });

            // AsynchStorage result is an nested array. UserAuthService is not deal with the nested array
            // lodash library is used to change the 'nested array' to an 'object'
            //var zippedObj = zipObject(val);

            if (!arr[KEY_INTRO_READ]) {
                // if empty result return empty on callback function
                return cb({errorMessage: "Intro key not found."});
            }

            var isIntroRead = arr[KEY_INTRO_READ];

            //return cb();
            return cb(null, isIntroRead);

        });
    }

}

module.exports = new AppService();