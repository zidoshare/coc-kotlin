import { ExtensionContext, StatusBarItem, window } from 'coc.nvim';

export interface Status {
  /** Updates the message. */
  update(msg: string): void;
}

/**
 * Encapsulates a status bar item.
 */
export class StatusBarEntry implements Status {
  private barItem: StatusBarItem;
  private prefix?: string;

  constructor(context: ExtensionContext, prefix?: string) {
    this.prefix = prefix;
    this.barItem = window.createStatusBarItem();
    context.subscriptions.push(this.barItem);
  }

  show(): void {
    this.barItem.show();
  }

  update(msg: string): void {
    this.barItem.text = `${this.prefix} ${msg}`;
  }

  dispose(): void {
    this.barItem.dispose();
  }
}
