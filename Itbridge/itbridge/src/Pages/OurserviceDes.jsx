import { useParams } from "react-router-dom";

function OurserviceDes() {
  const { serviceName } = useParams();
  const services = {
    "DIGITAL MARKETING": {
      description:
        "Digital marketing is the practice of promoting products, services, or brands using online channels and technologies to reach a targeted audience. It encompasses various strategies such as search engine optimization (SEO) for improving website visibility, pay-per-click (PPC) advertising for driving traffic through paid ads, and social media marketing (SMM) for engaging audiences on platforms like Facebook and Instagram. Other key components include email marketing, content marketing, influencer collaborations, and analytics to measure campaign performance. By leveraging these tools, digital marketing enables businesses to connect with customers effectively, often in real-time, across multiple touchpoints.",
      image: "../../public/image/app.jpg",
    },
    "CLOUD COMPUTING": {
      description:
        "Cloud computing is a technology that enables the delivery of computing services—such as servers, storage, databases, networking, software, and analytics—over the internet the cloud. It allows users to access resources on-demand without the need for physical infrastructure, offering scalability, flexibility, and cost-efficiency. Cloud providers like AWS, Microsoft Azure, and Google Cloud Platform manage and maintain the hardware and software, freeing users to focus on their applications and business needs. Cloud computing is categorized into service models such as IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service), and can be deployed as public, private, or hybrid clouds based on the specific requirements of organizations.",
      image: "../../public/image/digital.jpg",
    },
    "IT CONSULTING": {
      description:
        "IT consulting involves providing expert advice and strategic guidance to organizations on how to best leverage technology to meet their business goals. Consultants analyze the client's existing IT infrastructure, identify areas for improvement, and recommend tailored solutions, whether it's adopting new technologies, improving cybersecurity, or optimizing business processes. IT consultants may also assist with software development, cloud migration, data management, and system integration, ensuring that technology investments align with the company's objectives and drive efficiency. Through their expertise, IT consultants help businesses navigate technological challenges, improve performance, and remain competitive in a rapidly evolving digital landscape.",
      image: "../../public/image/download.jpg",
    },
    "MOBILE APP DEVELOPMENT": {
      description:
        "Mobile development involves creating software applications specifically designed to run on mobile devices, such as smartphones and tablets. You can approach mobile development in several ways, depending on your goals and target platform. Here’s an overview of common approaches:",
      image: "../../public/image/it.jpg",
    },
    "WEBSITE DEVELOPMENT": {
      description:
        "Website development is the process of creating and maintaining websites, encompassing everything from simple static pages to complex web applications. It involves several stages, including planning, designing, coding, testing, and deploying, using technologies like HTML, CSS, JavaScript, and backend languages such as Python, PHP, or Node.js. Modern development often integrates frameworks and libraries like React, Angular, or Laravel, and leverages content management systems (CMS) like WordPress for easier management. The goal is to ensure functionality, user experience, and responsiveness across devices while meeting the client’s objectives, whether for business, e-commerce, or personal use.",
      image: "../../public/image/software.jpg",
    },
    "CUSTOM SOFTWARE": {
      description:
        "Custom software refers to tailor-made applications specifically designed to meet the unique needs and requirements of a particular business or organization. Unlike off-the-shelf solutions, custom software is developed from the ground up, allowing for complete customization in terms of functionality, user interface, and integration with existing systems. This type of software provides greater flexibility, scalability, and performance, ensuring that it aligns perfectly with the business's objectives and workflows. While it often requires a higher initial investment, custom software can lead to long-term cost savings, enhanced efficiency, and a competitive advantage by addressing specific challenges and opportunities.",
      image: "../../public/image/website.jpg",
    },
  };

  const service = services[serviceName] || {
    description: "No details available for this service.",
    image: "../../public/image/it.jpg",
  };

  return (
    <div className="flex flex-col items-center gap-8 bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl text-center  ">
        <h1 className="text-4xl font-bold text-gray-900">{serviceName}</h1>
      </div>
      <div className="flex flex-col items-center ">
        <img
          src={service.image}
          alt={serviceName}
          className="w-[500px] h-80 rounded-lg shadow-lg"
        />
        <div className="text-justify">
          <p className="text-lg text-gray-700 mt-4">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

export default OurserviceDes;
