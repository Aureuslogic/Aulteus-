export default function BrokerWarningSection() {
  return (
    <div className="broker-warning" role="note" aria-label="eToro risk disclosure">
      <div className="broker-warning-box">
        <p>
          <strong>
            CFDs are complex instruments and come with a high risk of losing money
            rapidly due to leverage. 51% of retail investor accounts lose money when
            trading CFDs with this provider.
          </strong>{' '}
          You should consider whether you understand how CFDs work and whether you can
          afford to take the high risk of losing your money.
        </p>
        <p>
          eToro (UK) Ltd is authorised and regulated by the Financial Conduct Authority,
          FRN 583263. Aulteus Logic is a separate educational provider, is not regulated,
          and receives no discretion over your account.
        </p>
        <p>
          <strong>Affiliate disclosure.</strong> Aulteus Logic may receive a commission
          if you open an account through this link. It costs you nothing extra, and it
          does not change what we teach or how we teach it.
        </p>
      </div>
    </div>
  );
}
