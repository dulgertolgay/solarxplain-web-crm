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
import { customerTypes } from "../constants/types";

const CustomerDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Customer
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
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value=""
                placeholder="John Doe"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-2">
              <Label htmlFor="name">Customer Type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a customer type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Customer Types</SelectLabel>
                    {customerTypes.map((type) => (
                      <SelectItem value={type.value}>{type.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value=""
              placeholder="example@email.com"
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">Phone</Label>
            <Input
              id="name"
              value=""
              placeholder="0 (5xx) xxx xxxx"
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value=""
              placeholder="Customer address..."
              className="col-span-3"
            />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">District</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a district" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Districts</SelectLabel>
                  <SelectItem value="maltepe">Maltepe</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">Province</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a province" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Provinces</SelectLabel>
                  <SelectItem value="istanbul">İstanbul</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">Representative</Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">Manager</Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="name">Referrer</Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button variant="destructive">Discard</Button>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDialog;
