# Student Performance Dashboard
![image](https://github.com/mohammedwasim1/Student-Peformance-Dashboard/assets/121304144/0a868bf3-28fb-4559-a9e9-0686d0b17899)

### **Dataset source**
Link to dataset: https://www.kaggle.com/datasets/larsen0966/student-performance-data-set

## **Objective**

To investigate the factors that affect a students' overall result and understand the magnitude of their influence on students' academic performance.

## **Justification**

By understanding which factors have the most significant impact on academic performance, educational institutions can design targeted interventions and strategies to improve student outcomes. For example, if study time is found to have a strong correlation with student results, schools can allocate resources to promote effective study habits and time management skills among students.

## **Steps taken**

**Data integration**

Connected the dataset (CSV file) into Power BI, through Power Query.

**Data cleaning**

Performed a comprehensive range of data cleaning tasks (which included but was not limited to):

Providing contextual information to rankings, through replacing numbers with words. The columns Mother and Father educational attainment was provided a value from 0 - 4. Each number represented a range of values which shows the highest level of education attainment for each parent. i.e. 1 represented primary education. To provide better context to the dataset, the numbers were replaced with words to better describe the value.

Single letters were used for a lot of values within columns. For example the column 'Sex' contained two values: 'Male' and 'Female'. However these were shown as 'M' and 'F respectively. The full word replaced these values to make it immediately clear to people viewing the data. Several columns followed the name convention which was then changed. 

The students results were shown as a number between 1 and 20. These were changed to a percentage. I also created a new column which displayed the overall result from the three terms.

**Dashboard preparation**

Created measures, using DAX, to perform calculations on my data to derive new insights. These measures were then displayed as cards, within the dashboard.
  
**Visualisations**
  
Employed the use of appropriate chart types to represent my data accurately and intuitively. These consisted of: Line Chart, Pie Chart and others.
  
## **Key insights**

Students who study for 6+ hours achieve a mark of 10% more than those who study for less than two hours.

Students who have the shortest travel time to their academic institutions (less than 15 minutes) achieve the highest overall results. The students who must travel more than one hour, obtain the lowest overall results.

Those who participate in extracurricular activities slightly higher results, than those who don't.

## **Recommendations**

1. Promote effective study habits: Encourage students to dedicate sufficient time to studying by emphasizing the correlation between study time and academic performance. Provide resources, such as study guides or time management workshops, to help students develop effective study habits and time management skills. Consider integrating study time into the academic schedule and allocating dedicated study periods.

2. Optimize travel time: Recognize the impact of travel time on student performance and explore ways to minimize long commutes. Consider providing transportation options or exploring closer academic institutions for students with longer travel times. Additionally, explore the feasibility of distance learning or online classes for students who face significant travel challenges.

3. Encourage extracurricular participation: Highlight the positive association between extracurricular activities and academic performance. Promote a diverse range of extracurricular opportunities, such as sports, clubs, or arts, and emphasize the benefits of participation. Collaborate with teachers and coaches to ensure a balance between extracurricular involvement and academic responsibilities.

4. Provide study support and resources: Establish dedicated study spaces or study groups where students can collaborate and receive academic support. Offer tutoring services or peer mentoring programs to assist students with their studies. Provide access to resources such as libraries, online databases, and educational tools to facilitate independent learning.

5. Individualized support: Recognize that each student's circumstances and needs may vary. Implement personalized interventions by assessing the specific challenges faced by students and tailoring support accordingly. This can include providing additional assistance for students with longer travel times or creating flexible study options for students with various commitments.
