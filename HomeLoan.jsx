import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

const banks = [
  { name: 'SBI Home Loans', emoji: '🏦' },
  { name: 'HDFC Home Loans', emoji: '🏦' },
  { name: 'LIC Housing Finance', emoji: '🏦' },
  { name: 'PNB Housing', emoji: '🏦' },
  { name: 'IIFL Home Loans', emoji: '🏦' },
  { name: 'DHFL', emoji: '🏦' },
];

const steps = [
  { num: 1, title: 'Property चुनें', desc: 'अपने बजट और पसंद के अनुसार property select करें' },
  { num: 2, title: 'Documents तैयार करें', desc: 'हम सभी documents तैयार करवाने में मदद करेंगे' },
  { num: 3, title: 'Bank से Loan Apply', desc: 'हमारे partner banks से loan application submit करें' },
  { num: 4, title: 'Loan Approval', desc: 'Fast-track approval process — minimum paperwork' },
  { num: 5, title: 'कब्ज़ा पाएं!', desc: 'Loan approve होते ही property का possession लें' },
];

export default function HomeLoan() {
  return (
    <>
      <div className="page-banner">
        <h1>Home Loan Assistance</h1>
        <p>घर खरीदना हुआ आसान — 6+ Banks से Pre-Approved Loans</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Home Loan
        </div>
      </div>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <h2>Home Loan <span className="accent">Process</span></h2>
            <div className="section-divider" />
            <p>सही घर मिलने के बाद सबसे बड़ी चिंता — Home Loan। हमारी सभी properties 6+ banks से pre-approved हैं।</p>
          </div>

          <div className="loan-process">
            {steps.map((step, i) => (
              <div className="loan-step" key={i}>
                <div className="loan-step-num">{step.num}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="accent">Bank Partners</span></h2>
            <div className="section-divider" />
          </div>
          <div className="bank-strip">
            {banks.map((bank, i) => (
              <div className="bank-logo" key={i}>{bank.emoji} {bank.name}</div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="tel:9694722722" className="btn-primary" style={{ display: 'inline-flex' }}>
              <FiPhone /> Free Loan Consultation — 9694-722-722
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
