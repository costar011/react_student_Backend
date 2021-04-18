import Students from "../../model/Students";

export default {
  Query: {},
  Mutation: {
    registerStudents: async (_, args) => {
      const { name, birth, age, grade, mobile, school } = args;

      try {
        await Students.create({
          name,
          birth,
          age,
          grade,
          mobile,
          school,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
