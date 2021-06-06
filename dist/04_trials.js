// In this file you can specify the trial data for your experiment
/***
const trial_info = {
    key_press_trials: [
        {
            question: "Are these two figures the same except for their orientation?",
            picture: '/Users/Win10/mental-rotation-exp/images/1_50_different.jpg',
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
            correct: 'different',
            degree_of_rotation: '50',
            number_pictures: '5'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: '/Users/Win10/mental-rotation-exp/images/1_50_same.jpg',
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
            correct: 'same',
            degree_of_rotation: '50',
            number_pictures: '5'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: '/Users/Win10/mental-rotation-exp/images/1_150_different.jpg',
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
            correct: 'different',
            degree_of_rotation: '150',
            number_pictures: '5'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: '/Users/Win10/mental-rotation-exp/images/1_150_same.jpg',
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
            correct: 'same',
            degree_of_rotation: '150',
            number_pictures: '5'
        },
        {
            question: "Are these two figures the same except for their orientation?",
            picture: '/Users/Win10/mental-rotation-exp/images/2_50_different.jpg',
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
            correct: 'different',
            degree_of_rotation: '50',
            number_pictures: '5'
        }
    ]
};
***/
const practice_trials = {
    key_press: [
        {
            picture: "images/practice/13_50_same.jpg",
            item: 13,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/13_50_different.jpg",
            item: 13,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/13_150_same.jpg",
            item: 13,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/13_150_different.jpg",
            item: 13,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/14_50_same.jpg",
            item: 14,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/14_50_different.jpg",
            item: 14,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/14_150_same.jpg",
            item: 14,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/14_150_different.jpg",
            item: 14,
            angle: 150,
            expected: "different",
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
            
        },
        {
            picture: "images/practice/15_50_same.jpg",
            item: 15,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/15_50_different.jpg",
            item: 15,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/15_150_same.jpg",
            item: 15,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/practice/15_150_different.jpg",
            item: 15,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
    ],
};

const main_trials = {
    key_press: [
        {
            picture: "images/main/1_50_same.jpg",
            item: 1,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',

        },
        {
            picture: "images/main/1_50_different.jpg",
            item: 1,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/1_150_same.jpg",
            item: 1,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/1_150_different.jpg",
            item: 1,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/2_50_same.jpg",
            item: 2,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/2_50_different.jpg",
            item: 2,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/2_150_same.jpg",
            item: 2,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/2_150_different.jpg",
            item: 2,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },

        {
            picture: "images/main/3_50_same.jpg",
            item: 3,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/3_50_different.jpg",
            item: 3,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/3_150_same.jpg",
            item: 3,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/3_150_different.jpg",
            item: 3,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },

        {
            picture: "images/main/4_50_same.jpg",
            item: 4,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/4_50_different.jpg",
            item: 4,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/4_150_same.jpg",
            item: 4,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/4_150_different.jpg",
            item: 4,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },

        {
            picture: "images/main/5_50_same.jpg",
            item: 5,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/5_50_different.jpg",
            item: 5,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/5_150_same.jpg",
            item: 5,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/5_150_different.jpg",
            item: 5,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/6_50_same.jpg",
            item: 6,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/6_50_different.jpg",
            item: 6,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/6_150_same.jpg",
            item: 6,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/6_150_different.jpg",
            item: 6,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },

        {
            picture: "images/main/7_50_same.jpg",
            item: 7,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/7_50_different.jpg",
            item: 7,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/7_150_same.jpg",
            item: 7,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/7_150_different.jpg",
            item: 7,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },

        {
            picture: "images/main/8_50_same.jpg",
            item: 8,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/8_50_different.jpg",
            item: 8,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/8_150_same.jpg",
            item: 8,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/8_150_different.jpg",
            item: 8,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },

        {
            picture: "images/main/9_50_same.jpg",
            item: 9,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/9_50_different.jpg",
            item: 9,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/9_150_same.jpg",
            item: 9,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/9_150_different.jpg",
            item: 9,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/10_50_same.jpg",
            item: 10,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/10_50_different.jpg",
            item: 10,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/10_150_same.jpg",
            item: 10,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/10_150_different.jpg",
            item: 10,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/11_50_same.jpg",
            item: 11,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/11_50_different.jpg",
            item: 11,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/11_150_same.jpg",
            item: 11,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/11_150_different.jpg",
            item: 11,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/12_50_same.jpg",
            item: 12,
            expected: "same",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/12_50_different.jpg",
            item: 12,
            expected: "different",
            angle: 50,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/12_150_same.jpg",
            item: 12,
            expected: "same",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
        {
            picture: "images/main/12_150_different.jpg",
            item: 12,
            expected: "different",
            angle: 150,
            key1: 's',
            key2: 'd',
            s: 'same',
            d: 'different',
        },
    ],
};
