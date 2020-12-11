import Bio from "../../models/bio";
import Education from "../../models/education";
import Project from "../../models/project";
import Skill from "../../models/skill";
import Testimonial from "../../models/testimonial";
import Work from "../../models/work";


exports.all_list = async (req,res) => {
    try {
        const [bios, educations, projects, skills, testimonials, works ] = await Promise.all([
            Bio.find({}), 
            Education.find({}),
            Project.find({}),
            Skill.find({}),
            Testimonial.find({}),
            Work.find({})
        ]);

        const response = {bios, educations, projects, skills, testimonials, works };
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json(error)
    }
}
