import BiteSizeOtterize from '@/content/Webinars/BiteSizeOtterize';
import ConfigurationAsCode from '@/content/Webinars/ConfigurationAsCode';
import CostOptimizationWebinar from '@/content/Webinars/CostOptimizationWebinar';
import DeployWithFeatureFlags from '@/content/Webinars/DeployWithFeatureFlags';
import HeadlessBrowser from '@/content/Webinars/HeadlessBrowser';
import { IndividualWebinarPageFAQ } from '@/content/Webinars/IndividualWebinarPageContent';
import KafkaWebinar from '@/content/Webinars/KafkaWebinar';
import LivecycleWebinar from '@/content/Webinars/LivecycleWebinar';
import ObservabilityDevOps from '@/content/Webinars/ObservabilityDevOps';
import SimplifiedDeploymentWebinar from '@/content/Webinars/SimplifiedDeployment';
import SurrealDBWebinar from '@/content/Webinars/SurrealDBWebinar';
import ZeroDowmtime from '@/content/Webinars/ZeroDowntimeKubeslice';

import BPFWebinar from './BPFWebinar';
import ChatOpsWebinar from './ChatOpsWebinar';
import GopherWebinar from './GopherWebinar';
import NoCodeApproachWebianr from './NoCodeApproachWebianr';

const WebinarPageContent = {
  header: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Upcoming',
      href: '#upcoming',
    },
    {
      name: 'Past',
      href: '#past',
    },
    {
      name: 'Join',
      href: '#join',
    },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ],
  faq: IndividualWebinarPageFAQ,
};

export default WebinarPageContent;

export const webinar = [
  {
    img: SurrealDBWebinar.poster,
    title: SurrealDBWebinar.name,
    description: SurrealDBWebinar.description,
    time: SurrealDBWebinar.time,
    slug: SurrealDBWebinar.slug,
    details: SurrealDBWebinar,
  },
  {
    img: HeadlessBrowser.poster,
    title: HeadlessBrowser.name,
    description: HeadlessBrowser.description,
    time: HeadlessBrowser.time,
    slug: HeadlessBrowser.slug,
    details: HeadlessBrowser,
  },
  {
    img: DeployWithFeatureFlags.poster,
    title: DeployWithFeatureFlags.name,
    description: DeployWithFeatureFlags.description,
    time: DeployWithFeatureFlags.time,
    slug: DeployWithFeatureFlags.slug,
    details: DeployWithFeatureFlags,
  },
  {
    img: ConfigurationAsCode.poster,
    title: ConfigurationAsCode.name,
    description: ConfigurationAsCode.description,
    time: ConfigurationAsCode.time,
    slug: ConfigurationAsCode.slug,
    details: ConfigurationAsCode,
  },
  {
    img: ObservabilityDevOps.poster,
    title: ObservabilityDevOps.name,
    description: ObservabilityDevOps.description,
    time: ObservabilityDevOps.time,
    slug: ObservabilityDevOps.slug,
    details: ObservabilityDevOps,
  },
  {
    img: LivecycleWebinar.poster,
    title: LivecycleWebinar.name,
    description: LivecycleWebinar.description,
    time: LivecycleWebinar.time,
    slug: LivecycleWebinar.slug,
    details: LivecycleWebinar,
  },
  {
    img: BiteSizeOtterize.poster,
    title: BiteSizeOtterize.name,
    description: BiteSizeOtterize.description,
    time: BiteSizeOtterize.time,
    slug: BiteSizeOtterize.slug,
    details: BiteSizeOtterize,
  },
  {
    img: KafkaWebinar.poster,
    title: KafkaWebinar.name,
    description: KafkaWebinar.description,
    time: KafkaWebinar.time,
    slug: KafkaWebinar.slug,
    details: KafkaWebinar,
  },
  {
    img: BPFWebinar.poster,
    title: BPFWebinar.name,
    description: BPFWebinar.description,
    time: BPFWebinar.time,
    slug: BPFWebinar.slug,
    details: BPFWebinar,
  },
  {
    img: NoCodeApproachWebianr.poster,
    title: NoCodeApproachWebianr.name,
    description: NoCodeApproachWebianr.description,
    time: NoCodeApproachWebianr.time,
    slug: NoCodeApproachWebianr.slug,
    details: NoCodeApproachWebianr,
  },
  {
    img: GopherWebinar.poster,
    title: GopherWebinar.name,
    description: GopherWebinar.description,
    time: GopherWebinar.time,
    slug: GopherWebinar.slug,
    details: GopherWebinar,
  },
  {
    img: SimplifiedDeploymentWebinar.poster,
    title: SimplifiedDeploymentWebinar.name,
    description: SimplifiedDeploymentWebinar.description,
    time: SimplifiedDeploymentWebinar.time,
    slug: SimplifiedDeploymentWebinar.slug,
    details: SimplifiedDeploymentWebinar,
  },
  {
    img: ZeroDowmtime.poster,
    title: ZeroDowmtime.name,
    description: ZeroDowmtime.description,
    time: ZeroDowmtime.time,
    slug: ZeroDowmtime.slug,
    details: ZeroDowmtime,
  },
  {
    img: ChatOpsWebinar.poster,
    title: ChatOpsWebinar.name,
    description: ChatOpsWebinar.description,
    time: ChatOpsWebinar.time,
    slug: ChatOpsWebinar.slug,
    details: ChatOpsWebinar,
  },
  {
    img: CostOptimizationWebinar.poster,
    title: CostOptimizationWebinar.name,
    description: CostOptimizationWebinar.description,
    time: CostOptimizationWebinar.time,
    slug: CostOptimizationWebinar.slug,
    details: CostOptimizationWebinar,
  },
];
