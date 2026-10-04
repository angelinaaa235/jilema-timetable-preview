export const times = ['08:00–08:45','08:55–09:40','10:00–10:45','10:55–11:40','12:10–12:55','13:05–13:50','14:00–14:45','14:55–15:40','15:50–16:35','16:55–17:40','17:50–18:35','19:20–20:05','20:15–21:00'];
export const courses = [
 {id:'analysis',name:'数学分析 C',teacher:'钟新',credit:5,color:'cyan',kind:'专业必修',book:'《数学分析》',chapters:['实数与函数','数列极限','函数极限与连续','导数与微分','微分中值定理','不定积分'],slots:[{day:0,start:1,end:3,room:'10教204'},{day:3,start:3,end:5,room:'28教301'}]},
 {id:'algebra',name:'抽象代数',teacher:'喻厚义',credit:3,color:'purple',kind:'专业必修',book:'《近世代数基础》',chapters:['集合与映射','群的定义','子群与陪集','同态与同构','环与域'],slots:[{day:1,start:1,end:2,room:'28教105'},{day:2,start:1,end:2,room:'28教105'}]},
 {id:'real',name:'实变函数',teacher:'陈文晶',credit:3,color:'indigo',kind:'专业必修',book:'《实变函数论》',chapters:['集合与点集','测度','可测函数','Lebesgue 积分','积分与极限'],slots:[{day:2,start:3,end:4,room:'27教306'},{day:4,start:3,end:4,room:'27教306'}]},
 {id:'english',name:'大学英语 IIC',teacher:'龚晓秋',credit:2,color:'green',kind:'公共必修',book:'大学英语课程教材（待核实版本）',chapters:['学术阅读','词汇与表达','听力训练','议论文写作'],slots:[{day:0,start:7,end:8,room:'8教302'}]},
 {id:'politics',name:'毛泽东思想和中国特色社会主义理论体系概论',teacher:'祝陶然',credit:3,color:'teal',kind:'公共必修',book:'课程指定教材（待核实版本）',chapters:['导论','理论的形成与发展','主要理论成果','综合复习'],slots:[{day:1,start:7,end:9,room:'8教410'}]},
 {id:'sport',name:'体育 C（排球）',teacher:'焦天霖',credit:1,color:'rose',kind:'公共必修',book:'排球课程讲义',chapters:['基础准备','垫球','传球','发球','综合实践'],slots:[{day:2,start:7,end:8,room:'第一运动场'}]},
 {id:'culture',name:'东西方文明互鉴',teacher:'待教务确认',credit:2,color:'yellow',kind:'通识选修',book:'课程阅读书目（待补充）',chapters:['文明与交流','历史案例','主题讨论','课程论文'],slots:[{day:1,start:12,end:13,room:'教学楼 A201'}]},
 {id:'writing',name:'学术写作基础',teacher:'待教务确认',credit:2,color:'orange',kind:'通识选修',book:'学术写作讲义',chapters:['研究问题','文献阅读','论证结构','引用规范'],slots:[{day:2,start:12,end:13,room:'教学楼 B302'}]},
 {id:'ai',name:'人工智能与创新',teacher:'待教务确认',credit:2,color:'blue',kind:'通识选修',book:'人工智能通识讲义',chapters:['认识人工智能','机器学习入门','生成式 AI','创新实践'],slots:[{day:6,start:12,end:13,room:'线上课堂'}]},
 {id:'film',name:'电影艺术欣赏',teacher:'待教务确认',credit:2,color:'rose',kind:'通识选修',book:'电影艺术阅读材料',chapters:['镜头语言','叙事与剪辑','类型电影','影评写作'],slots:[{day:3,start:7,end:8,room:'艺术楼101'}]},
 {id:'photo',name:'摄影与视觉表达',teacher:'待教务确认',credit:2,color:'purple',kind:'通识选修',book:'视觉表达课程讲义',chapters:['观察与构图','光线与色彩','叙事摄影','作品实践'],slots:[{day:0,start:7,end:8,room:'艺术楼203'}]},
 {id:'python',name:'Python 程序设计',teacher:'待教务确认',credit:3,color:'teal',kind:'专业必修',book:'Python 程序设计课程教材',chapters:['变量与类型','分支与循环','函数','数据结构','项目实践'],slots:[{day:0,start:1,end:3,room:'实验楼402'},{day:3,start:3,end:5,room:'实验楼402'}]},
 {id:'data',name:'数据结构',teacher:'待教务确认',credit:3,color:'purple',kind:'专业必修',book:'《数据结构》',chapters:['算法与复杂度','线性表','栈与队列','树','图'],slots:[{day:1,start:1,end:2,room:'实验楼301'},{day:2,start:1,end:2,room:'实验楼301'}]},
 {id:'probability',name:'概率论与数理统计',teacher:'待教务确认',credit:3,color:'indigo',kind:'专业必修',book:'《概率论与数理统计》',chapters:['随机事件','随机变量','常见分布','大数定律','参数估计'],slots:[{day:2,start:3,end:4,room:'教学楼203'},{day:4,start:3,end:4,room:'教学楼203'}]}
].map(c=>({...c,weeks:[1,18]}));
export const plans = {
 '2024-数学与应用数学':['analysis','algebra','real','english','politics','sport'],
 '2025-数学与应用数学':['analysis','algebra','english','politics','sport'],
 '2024-计算机科学与技术':['python','data','probability','english','politics','sport'],
 '2025-计算机科学与技术':['python','probability','english','sport']
};
export const initialIds = ['analysis','algebra','real','english','politics','sport','culture','writing','ai'];
export function conflicts(course, selected) { return selected.filter(c=>c.id!==course.id && c.slots.some(a=>course.slots.some(b=>a.day===b.day && a.start<=b.end && b.start<=a.end && c.weeks[0]<=course.weeks[1] && course.weeks[0]<=c.weeks[1]))); }
export function weekDates(week){return Array.from({length:7},(_,i)=>{const d=new Date(Date.UTC(2026,7,31+(week-1)*7+i));return `${String(d.getUTCMonth()+1).padStart(2,'0')}/${String(d.getUTCDate()).padStart(2,'0')}`;});}
