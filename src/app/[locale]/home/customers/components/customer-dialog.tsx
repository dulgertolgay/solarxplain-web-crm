import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { Customer, customerTypes } from "../constants/types";
import { useTranslation } from "react-i18next";

export interface CustomerDialogProps {
  customer?: Customer;
}

const CustomerDialog = ({ customer }: CustomerDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {t("customerDialog.add")}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Customer</DialogTitle>
          <DialogDescription>
            Make changes to customer's profile here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-[3fr_2fr] gap-2">
            <div className="grid items-center gap-2">
              <Label htmlFor="name">
                {t("customerDialog.form.name.label")}
              </Label>
              <Input
                id="name"
                value=""
                placeholder={t("customerDialog.form.name.label")}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="name">
                {t("customerDialog.form.customerType.label")}
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t(
                      "customerDialog.form.customerType.placeholder"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      {t("table.toolbar.customerTypes.label")}
                    </SelectLabel>
                    {customerTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {t(`table.toolbar.customerTypes.options.${type.value}`)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="email">
              {t("customerDialog.form.email.label")}
            </Label>
            <Input
              id="email"
              value=""
              placeholder={t("customerDialog.form.email.placeholder")}
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">{t("customerDialog.form.phone.label")}</Label>
            <Input
              id="name"
              value=""
              placeholder={t("customerDialog.form.phone.placeholder")}
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="address">
              {t("customerDialog.form.address.label")}
            </Label>
            <Textarea
              id="address"
              value=""
              placeholder={t("customerDialog.form.address.placeholder")}
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">
              {t("customerDialog.form.district.label")}
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={t("customerDialog.form.district.placeholder")}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    {t("customerDialog.form.district.selectLabel")}
                  </SelectLabel>
                  <SelectItem value="maltepe">Maltepe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">
              {t("customerDialog.form.province.label")}
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={t("customerDialog.form.province.placeholder")}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    {t("customerDialog.form.province.selectLabel")}
                  </SelectLabel>
                  <SelectItem value="istanbul">İstanbul</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">
              {t("customerDialog.form.representative.label")}
            </Label>
            <Input
              id="name"
              value=""
              placeholder={t("customerDialog.form.representative.placeholder")}
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">
              {t("customerDialog.form.manager.label")}
            </Label>
            <Input
              id="name"
              value=""
              placeholder={t("customerDialog.form.manager.placeholder")}
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">
              {t("customerDialog.form.referrer.label")}
            </Label>
            <Input
              id="name"
              value=""
              placeholder={t("customerDialog.form.referrer.placeholder")}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button variant="destructive">{t("customerDialog.discard")}</Button>
          <Button type="submit">{t("customerDialog.save")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDialog;
