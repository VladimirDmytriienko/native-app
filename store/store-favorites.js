import { create } from 'zustand'

export const useStore = create((set) => ({
  favExercises: [{
    "bodyPart": "back",
    "equipment": "cable",
    "gifUrl": "https://gymvisual.com/img/p/1/5/5/9/3/15593.gif",
    "id": "1323",
    "name": "cable rope seated row",
    "target": "upper back",
    "secondaryMuscles": [
        "biceps",
        "forearms"
    ],
    "instructions": [
        "Sit on the rowing machine with your feet flat on the footrests and knees slightly bent.",
        "Grasp the cable ropes with an overhand grip, palms facing each other.",
        "Keep your back straight and lean slightly forward, maintaining a slight bend in your elbows.",
        "Pull the cable ropes towards your body, squeezing your shoulder blades together.",
        "Pause for a moment at the peak of the movement, then slowly release the tension and return to the starting position.",
        "Repeat for the desired number of repetitions."
    ]
  }],

  addFavExercise: (exercise) => set(state => {
    const isDuplicate = state.favExercises.some(ex => ex.id === exercise.id);
    if (!isDuplicate) {
      return {
        favExercises: [...state.favExercises, exercise]
      };
    }
    return state;
  })

}))


export const useWorkoutStore = create((set) => ({
  workouts: [{
    "bodyPart": "To chto Ishesh",
  }],

  addWorkout: (workout) => set(state => ({
    workouts: [...state.workouts, workout]
  })),

  removeWorkout: (workoutId) => set(state => ({
    workouts: state.workouts.filter(workout => workout.id !== workoutId)
  })),

  updateWorkout: (workoutId, updatedWorkout) => set(state => ({
    workouts: state.workouts.map(workout => (workout.id === workoutId ? updatedWorkout : workout))
  }))
}));

