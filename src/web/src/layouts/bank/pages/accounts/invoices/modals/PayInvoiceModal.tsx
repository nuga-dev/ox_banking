import React from 'react';
import { formatNumber } from '@/utils/formatNumber';
import { Button } from '@/components/ui/button';
import { UnpaidInvoice } from '~/src/common/typings';

const PayInvoiceModal: React.FC<{ invoice: UnpaidInvoice }> = ({ invoice }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <h2 className="border-b text-xl">Details</h2>
        <div>
          <p className="text-muted-foreground text-sm">Payment to</p>
          <p>{invoice.label}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Total</p>
          <p>{formatNumber(invoice.amount)}</p>
        </div>
      </div>
      <Button className="self-end">Confirm payment</Button>
    </div>
  );
};

export default PayInvoiceModal;